const buyOptions = {
  durationOptions: [1, 2, 3, 4, 5],
  ticketOptions: [
    {
      id: 0,
      title: 'Стандартный',
      description: `
        <ul>
            <li>Возможность поиграть со всеми пушистиками</li>
            <li>Возможность заказать вкусности для себя и пушистых хвостиков</li>
        </ul>`,
      price: 300
    },
    {
      id: 1,
      title: 'VIP',
      description: `
        <ul>
            <li>Акции по пристройству и выставки кошек</li>
            <li>Встречи фелинологов и любителей кошек</li>
            <li>Мероприятия для детей, экскурсии</li>
        </ul>`,
      price: 450
    }
  ]
};

export default buyOptions;
