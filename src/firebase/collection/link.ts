import { dbService } from "../my-base";
import { LinkType } from "../type/link";

export class LinkCollection {
  static addLink = async (userId: string, linkData: LinkType) => {
    try {
      await dbService
        .collection("user")
        .doc(userId)
        .collection("link")
        .add(linkData);
    } catch (error: any) {
      throw new Error(`Failed to add link document: ${error.message}`);
    }
  };

  static readLinkList = async (userId: string) => {
    try {
      const querySnapshot = await dbService
        .collection("user")
        .doc(userId)
        .collection("link")
        .get();

      const linkList = querySnapshot.docs.map((doc) => {
        const linkData = doc.data();
        const linkId = doc.id;
        return { id: linkId, ...linkData };
      });

      return linkList;
    } catch (error: any) {
      throw new Error(`Failed to fetch user links: ${error.message}`);
    }
  };

  static updateUserLinkTag = async (
    userId: string,
    linkId: string,
    newTag: string[]
  ): Promise<void> => {
    try {
      await dbService
        .collection("users")
        .doc(userId)
        .collection("link")
        .doc(linkId)
        .update({ tag: newTag });
    } catch (error: any) {
      throw new Error(`Failed to update link tags: ${error.message}`);
    }
  };

  static deleteLink = async (userId: string, linkId: string) => {
    try {
      await dbService
        .collection("user")
        .doc(userId)
        .collection("link")
        .doc(linkId)
        .delete();
    } catch (error: any) {
      throw new Error(`Failed to delete link document: ${error.message}`);
    }
  };
}
