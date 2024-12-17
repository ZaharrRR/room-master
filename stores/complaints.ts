import { defineStore } from "pinia";

interface Complaint {
  id: number;
  name: string;
  contact: string;
  title: string;
  description: string;
}

export const useComplaintsStore = defineStore("complaints", {
  state: () => ({
    complaints: [
      {
        id: 1,
        title: "Проблемы с доставкой",
        description:
          "Моя посылка до сих пор не доставлена, хотя срок уже истек.",
        name: "Иван Иванов",
        contact: "ivan@example.com",
      },
      {
        id: 2,
        title: "Некачественный товар",
        description: "Купленный товар оказался бракованным, требуется возврат.",
        name: "Анна Петрова",
        contact: "+7 999 123 45 67",
      },
      {
        id: 3,
        title: "Некорректная информация на сайте",
        description:
          "На сайте указана неверная цена на товар, что ввело меня в заблуждение.",
        name: "Дмитрий Сидоров",
        contact: "sidorov@example.com",
      },
      {
        id: 4,
        title: "Отсутствие ответа от службы поддержки",
        description:
          "Я пытался связаться с поддержкой, но ответа так и не получил.",
        name: "Екатерина Морозова",
        contact: "+7 999 987 65 43",
      },
      {
        id: 5,
        title: "Проблемы с оплатой",
        description:
          "При оплате заказа произошла ошибка, деньги списались, но заказ не оформлен.",
        name: "Петр Васильев",
        contact: "vasiliev@example.com",
      },
      {
        id: 6,
        title: "Неправильная комплектация заказа",
        description:
          "В заказе отсутствует один из товаров, который я заказывал.",
        name: "Ольга Сергеева",
        contact: "+7 999 555 44 33",
      },
      {
        id: 7,
        title: "Некорректное время доставки",
        description:
          "Доставка заказа заняла намного больше времени, чем было указано.",
        name: "Алексей Козлов",
        contact: "kozlov@example.com",
      },
      {
        id: 8,
        title: "Проблемы с возвратом средств",
        description:
          "Я вернул товар, но возврат средств до сих пор не осуществлен.",
        name: "Мария Федорова",
        contact: "+7 999 111 22 33",
      },
    ] as Complaint[],
  }),
  actions: {
    addComplaint(complaint: Complaint) {
      this.complaints.push(complaint);
    },
  },
});
