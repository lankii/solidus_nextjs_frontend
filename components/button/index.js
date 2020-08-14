import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors[props.type]};

  ${(props) => props.type === 'primary' && css`
    color: ${props.theme.colors.white};
  `}

  border-radius: 2px;
  border: 0;
  padding: 0 30px;
  height: 40px;
  outline: none;
  cursor: pointer;
`

const Button = ({ type }) => <StyledButton type={type}>ciao</StyledButton>

Button.defaultProps = {
  type: 'primary'
}

Button.propsTypes = {
  type: PropTypes.string
}

export default Button
