import { dbService } from "../my-base";

export class UserCollection {
  static readUser = async (userId: string) => {
    const data = await dbService.collection("user").doc(userId).get();
    return data.data();
  };

  static updateUserTagList = async (userId: string, tagList: string[]) => {
    return await dbService
      .collection("user")
      .doc(userId)
      .update({ tagList: tagList });
  };
}
