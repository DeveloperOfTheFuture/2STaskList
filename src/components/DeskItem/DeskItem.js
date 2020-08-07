import React from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";

import "./DeskItem.css";
import { deleteDesk } from "../../actions/index";

const DeskItem = ({ id, children, onDelete, onClick }) => {
  const deleteItem = () => {
    deleteDesk(id)
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Card size="l" onClick={onClick}>
      <Div className="DeskItem__content">
        {children}
        <Button mode="destructive" onClick={deleteItem}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};

DeskItem.propType = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DeskItem;
