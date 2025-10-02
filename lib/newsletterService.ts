import { supabase } from './supabaseClient';

export const subscribeToNewsletter = async (email: string) => {
  if (!supabase) {
    throw new Error('Supabase client not configured');
  }

  const { error } = await supabase.from('newsletter_subscribers').insert({ email });

  if (error) {
    if (error.code === '23505') {
      // unique violation (already subscribed)
      return { success: true, message: 'You are already subscribed.' };
    }
    console.error('[Supabase] subscribeToNewsletter error', error);
    throw error;
  }

  return { success: true, message: 'Thanks for subscribing to VIXLOR drops.' };
};
