import React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  image: string;
  name: string;
  title: string;
  description: string;
  abv: number;
  food_pairing: string;
};

function Card({ image, name, title, description, abv, food_pairing }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className="card" onClick={handleOpen}>
        <div className="card_photo">
          <img src={image} alt="card" className="card_image" />
        </div>
        <div className="card_text">
          <h2 className="card_title">{name}</h2>
          <h3 className="card_subtitle">{title}</h3>
        </div>
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="card_modal">
          <div className="card_modal_content">
            <div className="card_modal_block">
              <div className="card_modal_img">
                <img src={image} alt="" className="modal_image" />
              </div>
              <div className="card_modal_header">
                <h2 className="card_modal_title">{name}</h2>
                <h3 className="card_modal_subtitle">{abv}%</h3>
              </div>
              <button onClick={handleClose} className="modal_icon">
                <CloseIcon />
              </button>
            </div>

            <div className="card_modal_text">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h4 className="modal_description">Description</h4>
                </AccordionSummary>
                <AccordionDetails>{description}</AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <h4 className="modal_description">Food Pairing</h4>
                </AccordionSummary>
                <AccordionDetails>{food_pairing}</AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Card;
