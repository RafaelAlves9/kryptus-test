import * as React from 'react';
import { 
  DialogContent, 
  DialogContentText, 
  DialogActions, 
  Button, 
  Dialog, 
  DialogTitle, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as S from './styled';

export default function ModalDialog(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <React.Fragment>
        <Dialog
          open={props.open}
          onClose={handleClose}
        >
          <S.All>
            <DialogTitle><S.Titulo>{props.title}</S.Titulo></DialogTitle>
            <DialogContent>
              <DialogContentText>
                  <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{backgroundColor:'#fff'}}
                  >
                  <Typography><S.TituloInfo>Sinopse</S.TituloInfo></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p>{props.resum}</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{backgroundColor:'#fff'}}
                  >
                  <Typography><S.TituloInfo>Ano</S.TituloInfo></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p>{props.date}</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{backgroundColor:'#fff'}}
                  >
                  <Typography><S.TituloInfo>Direção</S.TituloInfo></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p>{props.director}</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{backgroundColor:'#fff'}}
                  >
                  <Typography><S.TituloInfo>Produção</S.TituloInfo></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p>{props.producer}</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                </DialogContentText>
              <DialogActions>
                <Button sx={{color:'var(--color-4)'}} onClick={handleClose}>Fechar</Button>
              </DialogActions>
            </DialogContent>
        </S.All>
        </Dialog>
    </React.Fragment>
  );
}