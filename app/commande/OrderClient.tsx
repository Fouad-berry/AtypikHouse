'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { SafeUser } from "../types";
import Container from "../components/Container";
import Heading from "../components/Heading";

interface Order {
  id: string;
  totalPrice: number;
  createdAt: string;
  status: string;
}

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

  return (
    <Container>
      <Heading title="Historique des commandes" subtitle="Voici vos précédentes commandes et leur statut." />
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col gap-6">
          {orders.map(orders => (
            <div key={orders.id} className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-bold text-lg">ID de la commande: {orders.id}</p>
              <p>Total: {orders.totalPrice} €</p>
              <p>Date: {new Date(orders.createdAt).toLocaleDateString('fr-FR')}</p>
              <p>Statut: {orders.status}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OrderClient;
