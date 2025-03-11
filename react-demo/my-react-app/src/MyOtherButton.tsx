interface MyOtherButtonProps {
    count: number;
    onClick: () => void;
}

export default function MyOtherButton({count, onClick}: MyOtherButtonProps) {
    return (
        <button onClick={onClick}>My Other Button {count}</button>
    );
}