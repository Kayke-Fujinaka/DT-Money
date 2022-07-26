import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import * as S from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={props.onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <S.Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />
        <S.TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="" />
            <span>Entrada</span>
          </button>
          <button>
            <img src={outcomeImg} alt="" />
            <span>Saída</span>
          </button>
        </S.TransactionTypeContainer>
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
