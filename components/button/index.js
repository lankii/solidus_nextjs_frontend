import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  ${(props) => props.type === 'primary' && css`
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
    border: 0;
  `}

  ${(props) => props.type === 'secondary' && css`
    background-color: ${props.theme.colors.white};
    color: ${props.theme.colors.primary};
    border: 1px solid ${props.theme.colors.primary};
  `}

  border-radius: 2px;
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
