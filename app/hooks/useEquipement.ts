import { useState, useEffect } from 'react';
import axios from 'axios';

interface Equipement {
    label: string;
    icon: string;
}

const useEquipements = () => {
    const [equipements, setEquipements] = useState<Equipement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/equipements')
            .then((response) => {
                setEquipements(response.data);
            })
            .catch((error) => {
                console.error('Error fetching equipements:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { equipements, loading };
};

export default useEquipements;
