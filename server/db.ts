// MOCK DATABASE FOR LOCAL DEVELOPMENT
// Replace with real database logic for production
export const db = {
  contactMessages: [],
  async createContactMessage(data) {
    this.contactMessages.push({ ...data, id: this.contactMessages.length + 1 });
    return { ...data, id: this.contactMessages.length };
  },
  async getAllContactMessages() {
    return this.contactMessages;
  },
};