// console.log(`Wellcome to node`)
// const argv = require('yargs').argv;
const contacts = require('./contacts');

// TODO: рефакторити
const  invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          // ...
          const listContacts = await contacts.listContacts();
            return console.log(listContacts);  
      

    case 'get':
          // ... id
          const contactById = await contacts.getContactById(id);
            return console.log(contactById) ;
      

    case 'add':
          // ... name email phone
          const newContact = await contacts.addContact({ name, email, phone });
                return console.log(newContact);
   

    case 'remove':
          // ... id
            const removeContact = await contacts.removeContact(id);
                    return console.log(removeContact);

    // default:
    //   console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', "id": "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: 'add', name: 'Mango', email: 'mango@gmail', phone: '322-22-22' });
// invokeAction({ action: 'remove', id: 'qdggE76Jtbfd9eWJHrssH' });

// console.log(process.argv)
// invokeAction(argv);

const actionIndex = process.argv.indexOf('--action');
if (actionIndex !== -1) {
    const action = process.argv[actionIndex + 1];
    invokeAction({ action });
  return;
}