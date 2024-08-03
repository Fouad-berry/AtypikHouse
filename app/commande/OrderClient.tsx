'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { SafeUser } from "../types";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { generateInvoice } from '../utils/invoice';
import { Order } from '../types'; 

interface OrderClientProps {
  currentUser?: SafeUser;
}

const OrderClient: React.FC<OrderClientProps> = ({ currentUser }) => {
  const [orders, setOrders] = useState<Order[]>([]);

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

  return (
    <Container>
      <Heading title="Historique des commandes" subtitle="Voici vos précédentes commandes et leur statut." />
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col gap-6">
          {orders.map(order => (
            <div key={order.id} className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-bold text-lg">ID de la commande: {order.id}</p>
              <p>Montant: {order.totalPrice} €</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString('fr-FR')}</p>
              <p>Statut: {order.status}</p>
              <button
                onClick={() => handleDownloadInvoice(order)}
                className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Télécharger la facture
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OrderClient;
