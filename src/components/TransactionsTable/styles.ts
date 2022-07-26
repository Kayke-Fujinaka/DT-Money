import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      text-align: left;
      padding: 1rem 2rem;
      color: var(--text-body);
      font-weight: 400;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      color: var(--text-body);
      background-color: var(--shape);
      border: 0;
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

    @media (max-width: 900px) {
      tr {
        font-size: 0.9rem;
      }
      td {
        padding: 0.75rem 1.75rem;
      }
    }

    @media (max-width: 600px) {
      td {
        padding: 0.5rem 1rem;
      }
    }

    @media (max-width: 425px) {
      tr {
        font-size: 0.8rem;
      }
      td {
        padding: 0.35rem;
      }
    }
  }
`;
