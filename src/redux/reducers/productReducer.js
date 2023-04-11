import { ActionType } from "../constant/action-types";

const initialState = {
  contacts: [
    {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@example.com",
        "phone": "555-555-5555",
        "subcontacts": [
          {
            "id": 1,
            "name": "Jane Doe",
            "email": "janedoe@example.com",
            "phone": "555-555-5556"
          },
          {
            "id": 2,
            "name": "Bob Smith",
            "email": "bobsmith@example.com",
            "phone": "555-555-5557"
          }
        ]
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "phone": "555-555-5558",
        "subcontacts": [
          {
            "id": 3,
            "name": "Tom Jones",
            "email": "tomjones@example.com",
            "phone": "555-555-5559"
          }
        ]
      },
      {
        "name": "Pratik",
        "email": "pratikcraval@gmail.com",
        "phone": "9016150454",
        "id": 3
      },
      {
        "name": "Raj",
        "email": "rm.opash@gmail.com",
        "phone": "986547123",
        "id": 4
      },
      {
        "username": "Pratik",
        "email": "pratikcraval@gmail.com",
        "phone": "9016150454",
        "id": 5
      }
  ],
};
export const productReducer = (state = initialState, {type , payload}) => {
  switch (type) {
    case ActionType.ADD_CONTACT:
      return state;
    default:
      return state;
  }
};
