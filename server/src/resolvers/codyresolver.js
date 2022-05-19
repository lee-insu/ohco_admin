import { v4 } from "uuid";
import { writeDB } from "../dbController.js";

const setCody = (data) => writeDB("cody", data);

const codyResolver = {
  Query: {
    codymain: (
      parent,
      { sex = "", season = "", offset = "", limit = "" },
      { db }
    ) =>
      db.cody
        .filter((item) => {
          const condition = { sex, season };
          Object.keys(condition).forEach((key) => {
            if (condition[key] === "") {
              delete condition[key];
            }
          });
          let result = true;
          for (let key of Object.keys(condition)) {
            if (item.category[key] != condition[key]) {
              result = false;
              break;
            }
          }
          return result;
        })
        .slice(offset, limit),

    codyfilter: (
      parent,
      { count = "", mood = "", season = "", style = "", sex = "", theme = "" },
      { db }
    ) =>
      db.cody
        .filter((item) => {
          const condition = { mood, season, style, sex, theme };
          Object.keys(condition).forEach((key) => {
            if (condition[key] === "") {
              delete condition[key];
            }
          });
          let result = true;
          for (let key of Object.keys(condition)) {
            if (item.category[key] != condition[key]) {
              result = false;
              break;
            }
          }
          return result;
        })
        .slice(0, count),

    codylist: (parent, args, { db }) => db.cody,

    usercodylist: (parent, { user_id = "" }, { db }) =>
      user_id
        ? db.cody.filter((item) => {
            return item.user_id === user_id;
          })
        : null,
    usersimilarlist: (parent, { style = "", sex = "" }, { db }) =>
      db.cody.filter((item) => {
        const condition = { style, sex };
        Object.keys(condition).forEach((key) => {
          if (condition[key] === "") {
            delete condition[key];
          }
        });
        let result = true;
        for (let key of Object.keys(condition)) {
          if (item.category[key] != condition[key]) {
            result = false;
            break;
          }
        }
        return result;
      }),
    codyitem: (parent, { id = "" }, { db }) =>
      db.cody.filter((item) => {
        return item.id === id;
      })[0],

    codyarray: (parent, { id = [id] }, { db }) =>
      db.cody.filter((item) => {
        return id.includes(item.id);
      }),
    codysearch: (parent, { search = "" }, { db }) =>
      db.cody.filter((item) => {
        return (
          item.information.name.includes(search) ||
          item.information.instagram.toLowerCase().includes(search) ||
          item.category.mood.includes(search) ||
          item.category.season.includes(search) ||
          item.category.sex === search ||
          item.category.style.includes(search) ||
          item.category.theme.includes(search)
        );
      }),

    information: (parent, args, { db }) => db.cody.information,
    category: (parent, args, { db }) => db.cody.category,
  },
  Mutation: {
    insertCody: (
      parent,
      {
        user_id,
        img_url,
        name,
        youtube,
        instagram,
        shop,
        mood,
        season,
        sex,
        style,
        theme,
      },
      { db }
    ) => {
      const newCody = {
        id: v4(),
        user_id,
        img_url,
        name,
        youtube,
        instagram,
        shop,
        mood,
        season,
        sex,
        style,
        theme,
      };

      const matching = (db) => {
        const newObj = {
          id: db.id,
          user_id: db.user_id,
          img_url: db.img_url,
          information: {
            name: db.name,
            youtube: db.youtube,
            instagram: db.instagram,
            shop: db.shop,
          },
          category: {
            season: db.season,
            sex: db.sex,
            mood: db.mood,
            style: db.style,
            theme: db.theme,
          },
        };

        return newObj;
      };

      db.cody.unshift(matching(newCody));
      setCody(db.cody);
      return matching(newCody);
    },
  },
};

export default codyResolver;
