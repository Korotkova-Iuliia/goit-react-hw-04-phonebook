import PropTypes from "prop-types";
import {
  ContactsHolder,
  Text,
  SpanText,
  ButtonDel,
} from "./ContactsList.styled";
const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactsHolder>
              <Text>
                {name}
                <SpanText>:</SpanText>
                {number}
              </Text>
              <ButtonDel
                key={id}
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </ButtonDel>
            </ContactsHolder>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactsList;
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
