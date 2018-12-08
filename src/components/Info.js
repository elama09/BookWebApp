import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Info extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <h4>Information</h4>
          <p>
            Уважаемые господа! Большое спасибо за посещение моей страницы. Все
            представленные здесь книги находятся в Финляндии в личной
            библиотеке. Возможна отправка книг почтой России из Санкт-Петербурга
            один раз в месяц, если нет иной договорённости. Также возможна
            отправка книг почтой Финляндии. Покупатель оплачивает почтовые
            расходы. Почтовые расходы необходимо уточнять перед покупкой книг.
            Оплата возможна на карту Сбербанка РФ, наличными при получении книг
            в Санкт-Петербурге. Со мной можно связаться следующим образом:
            эл.почта russian.books.finland@gmail.com, тел. +358405618382, skype
            Michael Finland, wiber MichaelFinland. С удовольствием отвечу на все
            Ваши вопросы. С большим вниманием и уважением рассмотрю Ваши
            предложения. При необходимости вышлю дополнительные фотографии. Для
            некоторых книг указана ссылка на сайт ресурса Russia beyond Russia
            где можно получить подробную информацию о книге.
          </p>
        </div>
        <div>
          <h3 className="text-center">
            {" "}
            <NavLink to="/books">Show Books</NavLink>
          </h3>
        </div>

        <div className="footer">
          <h6 className="text-center">
            Footer here, © copyright Michael Tcharni / Rare Russian Books
          </h6>
        </div>
      </div>
    );
  }
}

export default Info;
