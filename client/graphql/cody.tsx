import gql from "graphql-tag";

export const INSERT_CODY = gql`
  mutation INSERT_CODY(
    $userId: String!
    $imgUrl: String!
    $name: String
    $youtube: String
    $instagram: String
    $shop: String
    $mood: String
    $style: String
    $theme: String
    $season: String
    $sex: String
  ) {
    insertCody(
      user_id: $userId
      img_url: $imgUrl
      name: $name
      youtube: $youtube
      instagram: $instagram
      shop: $shop
      mood: $mood
      style: $style
      theme: $theme
      season: $season
      sex: $sex
    ) {
      id
      user_id
      img_url
      information {
        name
        youtube
        instagram
        shop
      }
      category {
        mood
        season
        sex
        style
        theme
      }
    }
  }
`;
