import styled from 'styled-components'

// {BgCont, TopCont, Heading, CreditCardCont,Hr,BottomCont,FormCont,Input,}

export const BgCont = styled.div`
  min-height: 100vh;
  height: 100%;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 0px;
  }
`
export const TopCont = styled.div`
  background-color: #3b4b69;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    height: 100%;
    width: 50%;
  }
`
export const Heading = styled.h1`
  color: ${props => (props.form ? '#344e7a' : '#ffffff')};
  font-family: Roboto;
  text-align: ${props => (props.main ? 'center' : 'normal')};

  ${props => {
    if (props.para) {
      if (props.name) {
        return `
                font-size:16px;
                font-weight:bold;
                `
      }
      return `
                font-size:16px;
                padding-top:30px !important;
            `
    }
    return `
        font-size:25px;
        width:auto; 
      `
  }}
  margin:0;
  padding: 10px;
`
export const Hr = styled.hr`
  border-bottom: 3px solid #ffd773;
  align-self: center;
  margin: auto;
  width: 160px;
  margin-top: 0;
`
export const CardCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    height: 90vh;
    margin-top: 0px;
  }
`
export const CreditCardCont = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 90%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  padding: 15px;
  padding-top: 60px;
  @media screen and (min-width: 992px) {
    width: 60%;
  }
`
export const BottomCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 50%;
  }
`
export const FormCont = styled.form`
  box-shadow: 0px 4px 16px 0px #d3d9e0;
  width: 85%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media screen and (min-width: 992px) {
    width: 60%;
  }
`
export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #c3cad9;
  outline: none;
  background: transparent;
  border-radius: 3px;
  color: #475569;
  margin-top: 20px;
  padding-left: 20px;
`
