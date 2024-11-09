import { getContact } from "../contact.js"

export async function getContactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}