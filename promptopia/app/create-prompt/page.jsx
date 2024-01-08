'use client';

import {useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import Form from '@components/Form';

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState ({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e) => {
        e.preventDefault(); //prevents the default action of browser to perform a reload
        setSubmitting(true);

        try {
            const response = await fetch() //last here
        } catch (error) {

        }
    }
    return (
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    )
}

export default CreatePrompt
