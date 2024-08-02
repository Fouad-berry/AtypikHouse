// components/ContactList.tsx
import { SafeUser } from '@/app/types';
import { FaUserCircle } from 'react-icons/fa';

export const dynamic = 'force-dynamic';

interface ContactListProps {
  contacts: SafeUser[];
  currentUser: SafeUser;
  onContactClick: (contact: SafeUser) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, currentUser, onContactClick }) => {
  return (
    <div className="max-w-sm w-full border rounded-lg p-4 mb-4 shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Mes messages</h2>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            onClick={() => onContactClick(contact)}
            className="cursor-pointer p-2 rounded-lg hover:bg-blue-50 flex items-center transition duration-200 ease-in-out border-b border-gray-200"
          >
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold text-white">
              {contact.name ? contact.name.charAt(0) : <FaUserCircle className="text-gray-400" />}
            </div>
            <div className="ml-3">
              <p className="text-lg font-medium text-gray-700">{contact.name ?? 'Nom inconnu'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
