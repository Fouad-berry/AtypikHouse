'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { SafeUser } from "../types";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { generateInvoice } from '../utils/invoice';
import { Order } from '../types'; 
import { FaFilePdf, FaInfoCircle } from 'react-icons/fa';
import OrderModal from "./OrderModal";

interface OrderClientProps {
  currentUser?: SafeUser;
}

const OrderClient: React.FC<OrderClientProps> = ({ currentUser }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      axios.get(`/api/orders`)
        .then(response => {
          setOrders(response.data);
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des commandes :", error);
        });
    }
  }, [currentUser]);

  const handleDownloadInvoice = async (order: Order) => {
    const pdfBytes = await generateInvoice(order);
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `facture-${order.id}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShowDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <Container>
      <Heading title="Historique des commandes" subtitle="Voici vos précédentes commandes et leur statut." />
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold text-gray-700">Numéro de la commande</th>
                <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold text-gray-700">Montant</th>
                <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold text-gray-700">Statut</th>
                <th className="py-3 px-4 border-b-2 text-center text-sm font-semibold text-gray-700">Facture</th>
                <th className="py-3 px-4 border-b-2 text-center text-sm font-semibold text-gray-700">Détails</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4 border-b text-sm text-gray-900">{order.orderNumber}</td>
                  <td className="py-2 px-4 border-b text-sm text-gray-900">{order.totalPrice} €</td>
                  <td className="py-2 px-4 border-b text-sm text-gray-900">{new Date(order.createdAt).toLocaleDateString('fr-FR')}</td>
                  <td className="py-2 px-4 border-b text-sm text-gray-900">{order.status}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <FaFilePdf 
                      className="text-red-500 cursor-pointer hover:text-red-700 transition duration-200"
                      onClick={() => handleDownloadInvoice(order)}
                      size={24}
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <FaInfoCircle 
                      className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-200"
                      onClick={() => handleShowDetails(order)}
                      size={24}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedOrder && (
        <OrderModal isOpen={isModalOpen} onClose={handleCloseModal} title="Détails de la commande">
          <div className="flex flex-col gap-4">
            <p><strong>Numéro de la commande:</strong> {selectedOrder.orderNumber}</p>
            <p><strong>Montant:</strong> {selectedOrder.totalPrice} €</p>
            <p><strong>Date:</strong> {new Date(selectedOrder.createdAt).toLocaleDateString('fr-FR')}</p>
            <p><strong>Statut:</strong> {selectedOrder.status}</p>
            {/* Ajoutez d'autres détails si nécessaire */}
          </div>
        </OrderModal>
      )}
    </Container>
  );
};

export default OrderClient;
