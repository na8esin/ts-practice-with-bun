type student = {
  id: string;
  major?: string;
}

const s: student = {
  id: '1234',
  major: null // Error: Type 'null' is not assignable to type 'string | undefined'.
}

const s1: student = {
  id: '1234'
}

type student2 = {
  id: string;
  major: string | null;
}

const s2: student2 = {
  id: '1234',
  major: null
}

const s3: student2 = {
  id: '1234'
} // Error: Property 'major' is missing in type '{ id: string; }' but required in type 'student2'.
