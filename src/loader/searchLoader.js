import { getContacts } from "../contact";

export async function searchLoader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts,q };
  }
  