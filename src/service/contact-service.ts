import { httpAxios } from "../Config/axios";
import { IContact } from "../Models/Contact";

const contactService = {
  getAll() {
    return httpAxios.get("/contact");
  },
  getById(id: number) {
    return httpAxios.get(`/contact/delete/${id}`);
  },
  getByMobile(mobile: string) {
    return httpAxios.get(`/contact/getByMobile/${mobile}`);
  },
  insert(contact: IContact) {
    return httpAxios.post("/contact/create", JSON.stringify(contact));
  },
  update(contact: IContact) {
    return httpAxios.put(`/contact/update/${contact.id}`, JSON.stringify(contact));
  },
  delete(id: number) {
    return httpAxios.delete(`/contact/delete/${id}`);
  },
};

export {contactService};
