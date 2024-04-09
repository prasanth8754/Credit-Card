import {useState} from 'react'
import {
  BgCont,
  TopCont,
  Heading,
  Hr,
  CardCont,
  CreditCardCont,
  BottomCont,
  FormCont,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setNum] = useState('')
  const [name, setName] = useState('')

  const onChangeNum = event => {
    setNum(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <BgCont>
      <TopCont>
        <Heading main>CREDIT CARD</Heading>
        <Hr />
        <CardCont>
          <CreditCardCont data-testid="creditCard">
            <Heading as="p">{cardNum}</Heading>
            <Heading as="p" para>
              CARDHOLDER NAME
            </Heading>
            <Heading as="p" para name>
              {name}
            </Heading>
          </CreditCardCont>
        </CardCont>
      </TopCont>
      <BottomCont>
        <FormCont>
          <Heading form>Payment Method</Heading>
          <Input type="text" placeholder="Card Number" onChange={onChangeNum} />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </FormCont>
      </BottomCont>
    </BgCont>
  )
}

export default CreditCard
