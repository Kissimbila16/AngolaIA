"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import Link from 'next/link';

export default function Comprar({ name = '' }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (

        <div>
            <Button onClick={handleOpen} variant="contained">{name} </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <h2>
                            Como obter o Acesso
                        </h2>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} width={300}>
                        <h4 style={{ height: 'auto' }} >
                            Passo 1 </h4>selecionar o tipo de plano que deseja. <br />
                        <h4 style={{ height: 'auto' }} >

                            Passo 2  </h4>fazer um pagamento no Express para +244938256058 baseando se no valor do plano selecionado . <br />
                        <h4 style={{ height: 'auto' }} >

                            Passo 3 </h4> Enviar o comprovativo junto com o codigo do plano selecionado para <Link href=''>doncajoblack@gmail.com</Link> . <br />
                        <h4 style={{ height: 'auto' }} >

                            Passo 4 </h4> Recebera o seu token junto com o endPoint em menos de 30 minutos . <br />
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}