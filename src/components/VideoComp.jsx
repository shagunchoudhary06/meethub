import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoComp = () => {
  const { roomID } = useParams(); // Get roomID from URL
  const containerRef = useRef(null); // Ref for container div

  useEffect(() => {
    const myMeeting = async () => {
      if (!roomID || !containerRef.current) return;

      const appID = 1797350003;
      const serverSecret = "2adf376b9b06f1a27513bc6cdd44c3ff";

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Anonymous"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
              window.location.protocol +
              '//' +
              window.location.host +
              window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });
    };

    myMeeting();
  }, [roomID]);

  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
};

export default VideoComp;
