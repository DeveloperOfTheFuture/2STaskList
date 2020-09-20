import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { CardGrid, Div } from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";

import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import { fetchCards } from "../../actions/actions";

import "./Cards.css";

const Cards = ({ columnId }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  // Запрос к БД
  useEffect(() => {
    dispatch(fetchCards(columnId));
  }, [dispatch, columnId]);

  return (
    <Fragment>
      <CardGrid>
        {cards.map(({ id, name }) => (
          <ColumnCard key={id} id={id}>
            {name}
          </ColumnCard>
        ))}
      </CardGrid>
      <Div className="Cards__createButton">
        <CardCreate columnId={columnId} />
      </Div>
    </Fragment>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;
