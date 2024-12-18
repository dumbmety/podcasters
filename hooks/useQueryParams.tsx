import { useSearchParams } from "next/navigation";

interface QueryParams {
  [key: string]: string | null;
}

function useQueryParams(params: string[]): QueryParams {
  const searchParams = useSearchParams();

  const queryParams: QueryParams = {};

  params.forEach((param) => {
    const value = searchParams.get(param);
    queryParams[param] = value ?? null;
  });

  return queryParams;
}

export default useQueryParams;
