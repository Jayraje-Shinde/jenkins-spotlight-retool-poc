import type { Contributor } from "../types/types";
import asciidoctor from "asciidoctor";

const asciidoctorInstance = asciidoctor();

const modules = import.meta.glob('../content/*.adoc', {
  eager: true,
  query: '?raw',
  import: 'default'
});

const contributorsArray: Contributor[] = [];

Object.entries(modules).forEach(([path, content]) => {
  // Extract slug from file path
  const slug = path.split('/').pop()?.replace('.adoc', '');

  if (!slug) return;

  // Parse AsciiDoc
  const doc = asciidoctorInstance.load(content as string);

  // Example: get attributes
  
const page_location = doc.getAttribute('page-location');
const page_intro = doc.getAttribute('page-intro');
const page_name = doc.getAttribute('page-name') || slug;
const html = doc.convert();
  contributorsArray.push({
    slug,
	 name : page_name,
    location:page_location,
    intro : page_intro,
	 html
  });
});
export { contributorsArray , };