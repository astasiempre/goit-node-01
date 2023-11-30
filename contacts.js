const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");
const contactsPath = path.join(__dirname, "./db/contacts.json");



// TODO: задокументувати кожну функцію
const listContacts = async () => {
  // ...твій код. Повертає масив контактів.
  const data = await fs.readFile(contactsPath, "utf-8");
  // console.log(data)
  return JSON.parse(data);
}


const getContactById = async (contactId) => {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const contact = contacts.find(contact => contact.id === contactId);
  return contact || null;
}

// function removeContact(contactId) {
//   // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }

const addContact = async (data) => {
  // ...твій код. Повертає об'єкт доданого контакту.
const contacts = await listContacts();
const newContact = {
  id: nanoid(),
  ...data
  }
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

const removeContact = async (contactId) => {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const idx = contacts.findIndex(item => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [removedContact] = contacts.splice(idx, 1);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removedContact;
}


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};