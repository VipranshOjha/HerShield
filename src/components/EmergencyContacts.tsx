import React, { useState } from 'react';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Contact {
  id: number;
  name: string;
  phone: string;
  relation: string;
}

export default function EmergencyContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    relation: '',
  });

  const addContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (newContact.name && newContact.phone && newContact.relation) {
      setContacts([
        ...contacts,
        { ...newContact, id: Date.now() },
      ]);
      setNewContact({ name: '', phone: '', relation: '' });
    }
  };

  const removeContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Contacts</h2>

          <form onSubmit={addContact} className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={newContact.name}
                  onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Relation
                </label>
                <input
                  type="text"
                  value={newContact.relation}
                  onChange={(e) => setNewContact({ ...newContact, relation: e.target.value })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Contact
            </button>
          </form>

          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{contact.name}</h3>
                  <p className="text-sm text-gray-600">{contact.phone}</p>
                  <p className="text-sm text-gray-500">{contact.relation}</p>
                </div>
                <button
                  onClick={() => removeContact(contact.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {contacts.length === 0 && (
            <p className="text-center text-gray-500 mt-4">
              No emergency contacts added yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}