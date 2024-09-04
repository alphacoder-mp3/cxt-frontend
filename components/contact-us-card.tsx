import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { Icons } from './icons';
import { Linkedin, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

export function ContactUsCard() {
  return (
    <Card className=" w-[300px] sm:w-[450px] mt-10  shadow-xl rounded-xl border  hover:shadow-4xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-4 rounded-t-xl ">
        <CardTitle className="text-xl font-bold">Contact Us</CardTitle>
        <CardDescription className="text-sm dark:text-gray-300 text-gray-600">
          Connect with us on our social handles
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Link
            className="flex items-center space-x-2"
            href={siteConfig.links.github}
            target="_blank"
          >
            <Icons.gitHub className="w-6 h-6" />
            <div className="hover:underline">GitHub</div>
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <Linkedin className="w-6 h-6" />
            <div className="hover:underline">LinkedIn</div>
          </Link>
          <Link
            href={siteConfig.links.x}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <Icons.twitter className="h-5 w-5 fill-current" />
            <div className="hover:underline">Twitter</div>
          </Link>
          <Link
            href={siteConfig.links.youtube}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <YoutubeIcon className="h-6 w-6" />
            <div className="hover:underline">YouTube</div>
          </Link>
        </div>
        <p className="text-center bg-stone-600 rounded-md px-4 text-neutral-400">
          Mail us at:{' '}
          <a href={`mailto:${siteConfig.email}`} className=" hover:underline">
            {siteConfig.email}
          </a>
        </p>
        <p className="text-center bg-stone-600 rounded-md px-4 text-neutral-400">
          Chat with us on Telegram:{' '}
          <a
            href={siteConfig.TGChat}
            target="_blank"
            className="hover:underline"
          >
            {siteConfig.TGChat}
          </a>
        </p>
        <p className="text-center bg-stone-600 rounded-md px-4 text-neutral-400 ">
          Join our Telegram channel:{' '}
          <a
            href={siteConfig.TGChannel}
            target="_blank"
            className=" hover:underline"
          >
            {siteConfig.TGChannel}
          </a>
        </p>
      </CardContent>
      {/* <CardFooter className="flex justify-between p-4 rounded-b-xl"></CardFooter> */}
    </Card>
  );
}
