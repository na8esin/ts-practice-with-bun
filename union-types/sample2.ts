// そもそもテストコードで担保してるから、そこまでは不要という考え方もある
//   であれば、テストコードでそれ以外の組み合わせがきた場合にエラーになることを確認しないといけない？
//     エラーにする必要まではないか。
// 逆の発想としては、共通のコンポーネントなのだから、どんなタイトルでも受け入れるべきで、それぞれのコンポーネントで
// それぞれのタイトルをチェックするべきではないかという考え方もある
// とはいえ、union typeはIDEの入力補完が効くので、便利とも言える

type New = {
  title: "新規";
  body: "保存";
};

type Edit = {
  title: "編集";
  body: "キャンセル";
};

type Props = {
  labels: New | Edit;
  onClick: () => void; // 他にもこんなプロパティがありそう
  nextURL: string;
};

function component(props: New | Edit) {}

component({ title: "編集", body: "保存" });
component({ title: "編集", body: "キャンセル" });
component({ title: "新規", body: "保存" });
component({ title: "新規", body: "キャンセル" });
component({ title: "あああ", body: "べええ" });

// 現実的には、propsはたくさんあるはずなので、
function component2(props: Props) {}

component2({
  labels: { title: "編集", body: "保存" }, // これで意図しない組み合わせは防ぐことができる
  onClick: () => {},
  nextURL: "",
});

function component3(mode: "new" | "edit"): { title: string; body: string } {
  if (mode === "new") {
    return {
      title: "新規",
      body: "保存",
    };
  } else if (mode === "edit") {
    return {
      title: "編集",
      body: "キャンセル",
    };
  } else {
    // javascript内で完結する話であれば、ここまでする必要はないかも。
    // modeの値をapiやdbから取得している場合は、必要
    throw new Error("Invalid mode");
  }
}

const titleAndBody = ((mode: "new" | "edit") => {
  switch (mode) {
    case "new":
      return {
        title: "新規",
        body: "保存",
      };
    case "edit":
      return {
        title: "編集",
        body: "キャンセル",
      };
    default:
      throw new Error("Invalid mode");
  }
})("new");

// Not all code paths return a value.
const titleAndBody2 = (mode: "new" | "edit" | "hello") => {
  switch (mode) {
    case "new":
      return {
        title: "新規",
        body: "保存",
      };
    case "edit":
      return {
        title: "編集",
        body: "キャンセル",
      };
  }
};
