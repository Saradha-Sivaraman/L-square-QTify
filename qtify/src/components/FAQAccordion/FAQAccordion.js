import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./FAQAccordion.module.css";
export default function FAQAccordion({ title }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.faqtitle}>
        <h1>FAQs</h1>
      </div>
      <div>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.expandicon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={styles.accordionwrapper}
          >
            <Typography>Is Qtify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.answers}>
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.expandicon} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            className={styles.accordionwrapper}
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.answers}>
            <Typography>Yes! You can download and listen to songs!</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}