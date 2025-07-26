import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service._id}`} className="block border rounded shadow hover:shadow-lg overflow-hidden">
      {service.images[0] && (
        <img src={service.images[0]} alt={service.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="text-gray-500">{service.location}</p>
        <p className="mt-2 font-bold">Ksh {service.price}</p>
      </div>
    </Link>
  );
}
