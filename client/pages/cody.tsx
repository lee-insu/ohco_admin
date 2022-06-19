import { useMutation } from "@apollo/client";
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { INSERT_CODY } from "../graphql/cody";
import { Newcody } from "../type";
import { useForm, SubmitHandler } from "react-hook-form";

type InsertCodyForm = {
  name: string;
  user_id: string;
  img_url: string;
  youtube: string;
  instagram: string;
  shop: string;
  mood: string;
  season: string;
  sex: string;
  style: string;
  theme: string;
};

const cody: NextPage = () => {
  const [username, setUsername] = useState<String>();
  const [userId, setUserId] = useState<String>();
  const [img, setImg] = useState<String>();
  const [instagram, setInstagram] = useState<String>();
  const [shopurl, setShopurl] = useState<String>();
  const [youtube, setYoutube] = useState<String>();
  const [sex, setSex] = useState<String>();
  const [mood, setMood] = useState<String>();
  const [style, setStyle] = useState<String>();
  const [season, setSeason] = useState<String>();
  const [theme, setTheme] = useState<String>();

  const { register, handleSubmit } = useForm<InsertCodyForm>();

  const onSubmit: SubmitHandler<InsertCodyForm> = (data) => console.log(data);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { value, name },
    } = e;

    name == "name"
      ? setUsername(value)
      : name == "username"
      ? setUserId(value)
      : name == "imgurl"
      ? setImg(value)
      : name == "instagram"
      ? setInstagram(value)
      : name == "shop"
      ? setShopurl(value)
      : name == "youtube"
      ? setYoutube(value)
      : null;
  };

  const handleChange = (
    e: ChangeEvent<{ value: String; name: String }>
  ): void => {
    const {
      target: { value, name },
    } = e;

    name == "sex"
      ? setSex(value)
      : name == "mood"
      ? setMood(value)
      : name == "style"
      ? setStyle(value)
      : name == "season"
      ? setSeason(value)
      : name == "theme"
      ? setTheme(value)
      : null;
  };

  const [addCody, { error }] = useMutation(INSERT_CODY);

  if (error) {
    console.log(`submit error ! ${error}`);
  }

  // const [insertCody, { error, data }] = useMutation<{ newcody: Newcody }>(
  //   INSERT_CODY,
  //   {
  //     variables: {
  //       name: username,
  //       user_id: userId,
  //       img_url: img,
  //       youtube,
  //       instagram,
  //       shop: shopurl,
  //       mood,
  //       season,
  //       sex,
  //       style,
  //       theme,
  //     },
  //   }
  // );

  return (
    <div className="max-w-7xl mt-10 mx-auto px-2 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-4">
          <div className="px-4 sm:px-0 ">
            <h2 className="text-2xl font-bold leading-6 text-gray-900">
              Cody Add
            </h2>
            <p className="mt-1 text-md text-gray-600">코디를 추가합시다</p>
          </div>
        </div>

        <div className=" mt-5 md:mt-0 md:col-span-4">
          <form>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6  ">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      이름
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="sm:w-3/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      유저 아이디
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="sm:w-3/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      이미지 주소
                    </label>
                    <input
                      type="text"
                      name="imgurl"
                      id="imgurl"
                      autoComplete="imgurl"
                      className="sm:w-3/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="sex"
                      className="block text-sm font-medium text-gray-700"
                    >
                      성별
                    </label>
                    <select
                      id="sex"
                      name="sex"
                      autoComplete="sex"
                      className="sm:w-2/5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value="null">선택</option>
                      <option value="남">남</option>
                      <option value="여">여</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="instagram"
                      className="block text-sm font-medium text-gray-700"
                    >
                      인스타그램
                    </label>
                    <input
                      type="text"
                      name="instagram"
                      id="instagram"
                      autoComplete="instagram"
                      className="sm:w-3/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="shop"
                      className="block text-sm font-medium text-gray-700"
                    >
                      쇼핑몰
                    </label>
                    <input
                      type="text"
                      name="shop"
                      id="shop"
                      autoComplete="shop"
                      className="sm:w-3/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="shop"
                      className="block text-sm font-medium text-gray-700"
                    >
                      개인사이트
                    </label>
                    <input
                      type="text"
                      name="youtube"
                      id="youtube"
                      autoComplete="youtube"
                      className="sm:w-2/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                    <label
                      htmlFor="mood"
                      className="block text-sm font-medium text-gray-700"
                    >
                      무드
                    </label>
                    <select
                      id="mood"
                      name="mood"
                      autoComplete="mood"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value="null">선택</option>
                      <option value="화이트와 차분한 무드">
                        화이트와 차분한 무드
                      </option>
                      <option value="화이트와 포근한 무드">
                        화이트와 포근한 무드
                      </option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                    <label
                      htmlFor="season"
                      className="block text-sm font-medium text-gray-700"
                    >
                      계절
                    </label>
                    <select
                      id="season"
                      name="season"
                      autoComplete="season"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value="null">선택</option>
                      <option value="봄">봄</option>
                      <option value="여름">여름</option>
                      <option value="가을">가을</option>
                      <option value="겨울">겨울</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                    <label
                      htmlFor="style"
                      className="block text-sm font-medium text-gray-700"
                    >
                      스타일
                    </label>
                    <select
                      id="style"
                      name="style"
                      autoComplete="style"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value="null">선택</option>
                      <option value="모던캐주얼">모던캐주얼</option>
                      <option value="캐주얼">캐주얼</option>
                      <option value="포멀">포멀</option>
                      <option value="스트릿">스트릿</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                    <label
                      htmlFor="style"
                      className="block text-sm font-medium text-gray-700"
                    >
                      테마
                    </label>
                    <select
                      id="theme"
                      name="theme"
                      autoComplete="theme"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value="null">선택</option>
                      <option value="y2k">y2k</option>
                      <option value="캠퍼스룩">캠퍼스룩</option>
                      <option value="꾸안꾸">꾸안꾸</option>
                      <option value="서촌">서촌</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>음악과 향수 불러와서 선택 </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-neutral-600 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
                >
                  업로드
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default cody;
