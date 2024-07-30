// components/ContactList.tsx
import { SafeUser, Message } from '@/app/types';
import { useRouter } from 'next/navigation';

interface ContactListProps {
  contacts: SafeUser[];
  currentUser: SafeUser;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, currentUser }) => {
  const router = useRouter();

  const handleContactClick = (contactId: string) => {
    router.push(`/mes-messages/${contactId}`);
  };

  return (
    <div className="max-w-sm w-full border rounded-lg p-4 mb-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} onClick={() => handleContactClick(contact.id)} className="cursor-pointer mb-2">
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
