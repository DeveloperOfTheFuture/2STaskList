import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import CardCreateForm from "./CardCreateForm";
import { createCard } from "../../actions/index";

const CardCreate = ({ columnId }) => {
  const dispatch = useDispatch();

  const createItem = (name) => dispatch(createCard(name, columnId));

  return <CardCreateForm onSubmit={createItem} />;
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
