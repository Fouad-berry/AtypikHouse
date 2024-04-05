// Dans la page de paiement
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';
import toast from 'react-hot-toast';

const PaymentPage = () => {
  const router = useRouter();

  useEffect(() => {
    const initiatePayment = async () => {
      const params = new URLSearchParams(window.location.search);
      const totalPrice = params.get('totalPrice');
      const startDate = params.get('startDate');
      const endDate = params.get('endDate');
      const listingId = params.get('listingId');

      try {
        // Appel à l'API pour créer une commande de paiement PayPal
        const response = await axios.post('../../api/paypal', {
          totalPrice,
          startDate,
          endDate,
          listingId
        });

        // Rediriger l'utilisateur vers l'URL d'approbation PayPal
        window.location.href = response.data.approvalUrl;
      } catch (error) {
        console.error('Erreur lors de l\'initialisation du paiement : ', error);
        toast.error('Erreur lors de l\'initialisation du paiement');
        router.push('/'); // Rediriger l'utilisateur vers la page d'accueil en cas d'erreur
      }
    };

    initiatePayment();
  }, []);

  return (
    <div>
      <p>Redirection vers PayPal...</p>
    </div>
  );
};

export default PaymentPage;
