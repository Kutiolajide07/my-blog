type TopicCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function TopicCard({
  title,
  description,
  icon,
}: TopicCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-5 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-base leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}