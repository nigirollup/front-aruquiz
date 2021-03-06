import {gql} from "apollo-boost";

export const GET_QUIZZES = gql`
query quizzes {
  quizzes {
    id, 
    name, 
    schoolSubject {
      name
    }
    createdBy {
      id
    }
  }
}
`;

export const GET_QUIZ = gql`
query quiz($quizId: ID!){
  quiz(quizId: $quizId){
    id,
    name,
    schoolSubject {
      name
    },
    createdBy {
      userName
    },
    questions {
      id,
      label,
      answers {
        id,
        label,
        isRight
      }
    }
  }
}
`;

export const SEARCH_QUERY_QUIZZES = gql`
  query quizzes($filter: String!) {
    quizzes(filter: $filter) {
        id,
        name
    }
  }
`

export const GET_QUIZZES_WITH_FILTER = gql`
query quizzesBySchoolClass($filter: [String!]!, $search: String = "", $forCurrentUser: Boolean = false){
  quizzesBySchoolClass(filter: $filter, search: $search, forCurrentUser: $forCurrentUser) {
    id,
    name,
    schoolSubject {
      name
    },
    createdBy {
      userName
    }
  }
}
`;