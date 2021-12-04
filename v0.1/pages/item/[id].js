import { useRouter } from 'next/router';

export default function Id() {
    const { query } = useRouter();
    const { id } = query;

    return (
        <>
            {id}
        </>
    )
}