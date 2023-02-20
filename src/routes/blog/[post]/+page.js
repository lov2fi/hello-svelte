import { error } from '@sveltejs/kit';

export function load({ params }) {
  if (params.post === 'hello-world') {
    return {
      title: 'hello',
      content: 'welcome'
    };
  }

  throw error(404, 'not found');
}
