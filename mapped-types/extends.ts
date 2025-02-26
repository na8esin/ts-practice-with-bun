type LoaderData = {
  data: string;
}

type RouteLoaderData = {
  data: unknown;
}

type CreateLoaderData<T extends RouteLoaderData> = {
  data: T["data"];
}

///////////

type Info = {
  name: string;
  loaderData: CreateLoaderData<LoaderData>;
}

type RouteInfo = {
  name: string;
  loaderData: unknown;
}

type CreateProps<T extends RouteInfo> = {
  name: T["name"];
  loaderData: T["loaderData"];
}

type Props = CreateProps<Info>;