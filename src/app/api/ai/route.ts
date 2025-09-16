import { SYSTEM_PROMPT } from '@/lib/prompt';
import Anthropic from '@anthropic-ai/sdk';
import { TextBlock } from '@anthropic-ai/sdk/resources';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic();

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const msg = await anthropic.messages.create({
      model: "claude-opus-4-1-20250805",
      max_tokens: 1024,
      temperature: 0,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    // ✅ Extract actual text response
    const result = (msg.content[0] as TextBlock).text ?? "";
    console.log("AI Response:", result);
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error in AI route:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
