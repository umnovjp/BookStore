import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    profiles {
      username
      email
      password
      savedBooks
    }
  }`
  // not sure to execute me query on apollo server change 'profiles'
;
